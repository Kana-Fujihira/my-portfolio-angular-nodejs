import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../project';
import { ProjectService } from '../../project.service';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule, RouterOutlet],
  template: ` <div id="myCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="first-slide"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="First slide"
          />
          <div class="container">
            <div class="carousel-caption text-left">
              <h1>{{ project?.name }}</h1>
              <p>
                {{ project?.description }}
              </p>
              <p>
                <a class="btn btn-lg btn-primary" href="#" role="button"
                  >Sign up today</a
                >
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Marketing messaging and featurettes
================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing">
      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-lg-4">
          <img
            class="rounded-circle"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2>Heading</h2>
          <p>
            Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
            Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo
            risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo
            cursus magna.
          </p>
          <p>
            <a class="btn btn-secondary" href="#" role="button"
              >View details &raquo;</a
            >
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img
            class="rounded-circle"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2>Heading</h2>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
            amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor
            mauris condimentum nibh.
          </p>
          <p>
            <a class="btn btn-secondary" href="#" role="button"
              >View details &raquo;</a
            >
          </p>
        </div>
        <!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <img
            class="rounded-circle"
            src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
            alt="Generic placeholder image"
            width="140"
            height="140"
          />
          <h2>Heading</h2>
          <p>
            Donec sed odio dui. Cras justo odio, dapibus ac facilisis in,
            egestas eget quam. Vestibulum id ligula porta felis euismod semper.
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus.
          </p>
          <p>
            <a class="btn btn-secondary" href="#" role="button"
              >View details &raquo;</a
            >
          </p>
        </div>
        <!-- /.col-lg-4 -->
      </div>
      <!-- /.row -->

      <!-- START THE FEATURETTES -->

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            First featurette heading.
            <span class="text-muted">It'll blow your mind.</span>
          </h2>
          <p class="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="featurette-image img-fluid mx-auto"
            src="./assets/img/500x500.svg"
            alt="Generic placeholder image"
          />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7 order-md-2">
          <h2 class="featurette-heading">
            Oh yeah, it's that good.
            <span class="text-muted">See for yourself.</span>
          </h2>
          <p class="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img
            class="featurette-image img-fluid mx-auto"
            src="./assets/img/500x500.svg"
            alt="Generic placeholder image"
          />
        </div>
      </div>

      <hr class="featurette-divider" />

      <div class="row featurette">
        <div class="col-md-7">
          <h2 class="featurette-heading">
            And lastly, this one. <span class="text-muted">Checkmate.</span>
          </h2>
          <p class="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div class="col-md-5">
          <img
            class="featurette-image img-fluid mx-auto"
            src="./assets/img/500x500.svg"
            alt="Generic placeholder image"
          />
        </div>
      </div>
      <hr class="featurette-divider" />

      <!-- /END THE FEATURETTES -->
    </div>
    <!-- /.container -->

    <!-- FOOTER -->
    <footer class="container">
      <p class="float-right"><a href="#">Back to top</a></p>
      <p>
        &copy; 2017-2018 Company, Inc. &middot; <a href="#">Privacy</a> &middot;
        <a href="#">Terms</a>
      </p>
    </footer>`,
  // templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss',
})
export class ProjectDetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  projectService = inject(ProjectService);
  project: Project | undefined;
  constructor() {
    const projectId = Number(this.route.snapshot.params['id']);
    this.project = this.projectService.getProjectById(projectId);
  }
}
