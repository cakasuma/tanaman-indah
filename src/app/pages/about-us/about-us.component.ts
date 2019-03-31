import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from '../../services/feedback/feedback.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  @Input() feedbackData = { name: '', email: '', subject: '', message: '' };

  loading: boolean = false;
  lat: number = -2.947540;
  lng: number = 104.763550;

  constructor(public feedback:FeedbackService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loading = false;
  }

  addFeedback() {
    this.loading = true;
    this.feedback.addFeedback(this.feedbackData).subscribe((result) => {
      Swal.fire('Thank you!', 'Your feedback has been submitted', 'success');
      Object.keys(this.feedbackData).forEach(element => {
        this.feedbackData[element] = '';
      });
      this.loading = false;
    }, (err) => {
      console.log(err);
      Swal.fire('Sorry', 'there is a problem with our server', 'error');
      this.loading = false;
    });
  }

}
