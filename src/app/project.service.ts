import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  projectList: Project[] = [
    {
      id: 0,
      name: 'Ewok Quiz',
      description: "Création d'un quiz utilisant le Document Objet Modèle",
      skil: 'Figma - Git - GitHub - HTML - CSS - JavaScript',
    },
    {
      id: 1,
      name: 'Find Your Holidays',
      description:
        " Développement d'une application React permettant de rechercher et d'obtenir les résultats des jours fériés de 90 pays en utilisant l'API Nager.date",
      skil: 'Figma - Git - GitHub - HTML - CSS - JavaScript - React.js - Node.js - API ',
    },
    {
      id: 2,
      name: 'Broadkat',
      description:
        " Développement d'une plateforme de streaming vidéo, alliant expertise frontend et backend, intégrant une gestion avancée des bases de données. ",
      skil: 'Figma - Git - GitHub - HTML - CSS - JavaScript - React.js - Node.js - MySQL',
    },
    {
      id: 3,
      name: 'Portfolio fullstack React/MySQL',
      description:
        "Création d'un portfolio pendent 2 jours avec comepétence full-stack apris à la Wild Code School",
      skil: 'Figma - Git - GitHub - HTML - CSS - JavaScript - React.js - Node.js - MySQL',
    },
  ];

  getAllProjects(): Project[] {
    return this.projectList;
  }
  getProjectById(id: number): Project | undefined {
    return this.projectList.find((project) => project.id === id);
  }

  constructor() {}
}
