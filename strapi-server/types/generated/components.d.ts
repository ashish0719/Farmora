import type { Schema, Struct } from '@strapi/strapi';

export interface SectionsCategoriesSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_categories_sections';
  info: {
    displayName: 'Categories Section';
  };
  attributes: {
    categories: Schema.Attribute.Relation<
      'oneToMany',
      'api::category.category'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeaturedProductsSection
  extends Struct.ComponentSchema {
  collectionName: 'components_sections_featured_products_sections';
  info: {
    displayName: 'Featured Products Section';
  };
  attributes: {
    products: Schema.Attribute.Relation<'oneToMany', 'api::product.product'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_hero_sections';
  info: {
    displayName: 'Hero Section';
  };
  attributes: {
    hero_slides: Schema.Attribute.Relation<
      'oneToMany',
      'api::hero-slide.hero-slide'
    >;
    title: Schema.Attribute.String;
  };
}

export interface SharedContactInfo extends Struct.ComponentSchema {
  collectionName: 'components_shared_contact_infos';
  info: {
    displayName: 'contact-info';
  };
  attributes: {
    address: Schema.Attribute.Text;
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
  };
}

export interface SharedMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_menu_items';
  info: {
    displayName: 'menu-item';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_social_links';
  info: {
    displayName: 'social-link';
  };
  attributes: {
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedWeightPrice extends Struct.ComponentSchema {
  collectionName: 'components_shared_weight_prices';
  info: {
    displayName: 'weight-price';
  };
  attributes: {
    price: Schema.Attribute.Decimal;
    weight: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'sections.categories-section': SectionsCategoriesSection;
      'sections.featured-products-section': SectionsFeaturedProductsSection;
      'sections.hero-section': SectionsHeroSection;
      'shared.contact-info': SharedContactInfo;
      'shared.menu-item': SharedMenuItem;
      'shared.social-link': SharedSocialLink;
      'shared.weight-price': SharedWeightPrice;
    }
  }
}
