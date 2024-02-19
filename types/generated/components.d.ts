import type { Schema, Attribute } from '@strapi/strapi';

export interface PageHeader extends Schema.Component {
  collectionName: 'components_page_headers';
  info: {
    displayName: 'Header';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    sub_title: Attribute.String;
  };
}

export interface PageSeo extends Schema.Component {
  collectionName: 'components_page_seos';
  info: {
    displayName: 'SEO';
    icon: 'manyWays';
  };
  attributes: {
    title: Attribute.String;
    meta_description: Attribute.Text;
    keywords: Attribute.Text;
  };
}

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
      'page.header': PageHeader;
      'page.seo': PageSeo;
      'slider.slide': SliderSlide;
    }
  }
}
