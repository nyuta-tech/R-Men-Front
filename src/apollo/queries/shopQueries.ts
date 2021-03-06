import { gql } from '@apollo/client';

export const GET_SHOPS_DETAIL_BY_ID = gql`
  query GetShopsDetailById($id: uuid = "") {
    shops_by_pk(id: $id) {
      description
      id
      name
      prefecture_id
      shop_urls(where: { shop_id: { _eq: $id } }) {
        url
      }
      shop_comments(where: { shop_id: { _eq: $id } }, offset: 10) {
        content
        user {
          id
          name
          prefecture_id
        }
      }
      likes_aggregate {
        aggregate {
          count
        }
      }
      shop_categories(where: { shop_id: { _eq: $id } }) {
        category {
          id
          name
        }
      }
    }
  }
`;

export const GET_SHOPIDS = gql`
  query GetShopIds {
    shops(limit: 5, order_by: { created_at: desc }) {
      id
    }
  }
`;

export const GET_SHOPS = gql`
  query GetShops($prefecture_id: Int_comparison_exp = {}) {
    shops(where: { prefecture_id: $prefecture_id }) {
      name
      id
      shop_categories {
        category {
          id
          name
        }
      }
    }
  }
`;
export const GET_SHOPS_BY_PREFECTURE = gql`
  query GetShopsByPrefecture($_eq: Int, $offset: Int, $limit: Int) {
    shops(
      where: { prefecture_id: { _eq: $_eq } }
      offset: $offset
      limit: $limit
    ) {
      id
      prefecture_id
      name
      shop_categories {
        category {
          id
          name
        }
      }
      description
      shop_urls {
        url
      }
      likes_aggregate {
        aggregate {
          count
        }
      }
      shop_comments {
        shop_id
      }
    }
  }
`;
// shop_comments_aggregate {
//   aggregate {
//     count
//   }
// }
