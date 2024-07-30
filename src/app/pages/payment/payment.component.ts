import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{

  @ViewChild('paymentRef', { static: true }) paymentRef!: ElementRef;
  subtotal: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.subtotal = +params['subtotal'] || 0;
    });
    this.renderPayPalButton();
  }

  renderPayPalButton(): void {
    paypal.Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: this.subtotal.toFixed(2) // Amount to be paid
            }
          }]
        });
      },
      onApprove: (data: any, actions: any) => {
        return actions.order.capture().then((details: any) => {
          alert('Transaction completed by ' + details.payer.name.given_name);
        });
      }
    }).render(this.paymentRef.nativeElement); // Render the PayPal button into this container
  }

}
