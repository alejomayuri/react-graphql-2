import { gql, useQuery } from "@apollo/client";

const ALL_COUNTRIES = gql`
query Countries {
  countries {
    code
    name
    emoji
    currency
    continent {
      name
      code
    }
    languages {
      name
    }
    capital
  }
}
`

export default function getAllCountries() {
    const { data, loading, error } = useQuery(ALL_COUNTRIES)

    return { data, loading, error }
}