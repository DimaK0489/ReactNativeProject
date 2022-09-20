import {apiSlice} from './Api';

interface Packs {
  _id: string;
  cardsPack: [
    {
      _id: string;
      user_id: '';
      name: string;
      path: string;
      cardsCount: number;
      grade: number;
      shots: number;
      rating: number;
      type: string;
      created: string;
      updated: string;
      __v: number;
    },
  ];
  cardPacksTotalCount: 0;
  maxCardsCount: 0;
  minCardsCount: 0;
  page: 1;
  pageCount: 0;
}

type PacksResponse = Packs;

export const PacksApi = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: builder => ({
    getAllPacks: builder.query<PacksResponse[], void>({
      query: () => ({
        url: 'cards/pack',
        method: 'GET',
      }),
      providesTags: result =>
        result ? result.map(({_id}) => ({type: 'Packs', _id})) : [],
    }),
  }),
});

export const {useGetAllPacksQuery} = PacksApi;
