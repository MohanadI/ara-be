import type { Schema, Attribute } from '@strapi/strapi';

export interface SliderSlide extends Schema.Component {
  collectionName: 'components_slider_slides';
  info: {
    displayName: 'slide';
  };
  attributes: {
    sub_title: Attribute.String;
    title: Attribute.String;
    description: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'slider.slide': SliderSlide;
    }
  }
}
