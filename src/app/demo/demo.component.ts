import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnChanges, OnDestroy {
  @Input() data: string = '';
  subscription !: Subscription

  ngOnInit() {
    const numbers$ = interval(500); // Observable بيطلع رقم كل ثانية

    // 👇 هنا بنستخدم subscribe كـ method
    this.subscription = numbers$.subscribe(value => {
      console.log('Received:', value);
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('🟡 ngOnChanges → Input changed:', changes);
  }

  ngOnDestroy() {
    // 👈 لازم نلغي الاشتراك لما الكومبوننت يتقفل
    this.subscription.unsubscribe();
  }

}
