import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
  return {
    id: params.id
  };
};

// This ensures the component is rendered on the client-side
export const ssr = false;
