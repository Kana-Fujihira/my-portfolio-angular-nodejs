import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

// __dirname を定義
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 環境変数を読み込むための設定
dotenv.config({ path: "./config/.env" });

const app = express();

const uri = `mongodb+srv://Kana:${process.env.VITE_DB_KEY}@cluster0.exu00.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // クライアントをサーバーに接続する
    await client.connect();
    // 接続確認のためにpingを送信
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err);
  } finally {
    // クライアントの接続を閉じる
    await client.close();
  }
}

run().catch(console.dir);

app.get("/", function (req, res) {
  res.json({ success: true });
});

const PORT = process.env.PORT || "3001";

app.listen(PORT, function () {
  console.log("I am running!");
});
