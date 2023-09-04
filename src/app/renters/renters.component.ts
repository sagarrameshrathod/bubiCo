import { Component, AfterViewInit, ElementRef } from '@angular/core';
declare var $: any;

@Component({
    selector: 'app-renters',
    templateUrl: './renters.component.html',
    styleUrls: ['./renters.component.less']
})
export class RentersComponent implements AfterViewInit {
    constructor(private elementRef: ElementRef) {}

    ngAfterViewInit(): void {
        const sliderElement = $('.renters-image');
        const sliderElementName = $('.renters-name');


        sliderElement.slick({
            autoplay: false,
            // autoplaySpeed: 3000,
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow : '#prev-btn',
            nextArrow: '#next-btn'
        });

        sliderElementName.slick({
            autoplay: false,
            dots: false,
            infinite: true,
            speed: 100,
            slidesToShow: 1,
            adaptiveHeight: true,
            prevArrow : '.prev',
            nextArrow: '.next'
        });
    }
}
