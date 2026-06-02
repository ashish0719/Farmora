import type { Schema, Struct } from '@strapi/strapi';

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
      'shared.weight-price': SharedWeightPrice;
    }
  }
}
