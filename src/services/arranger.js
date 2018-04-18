import ajax from 'services/ajax';
import { arrangerProjectId, arrangerApiRoot } from 'common/injectGlobals';
import urlJoin from 'url-join';

const graphql = async ({ api, body }) =>
  api
    ? await api({ endpoint: `/${arrangerProjectId}/graphql`, body })
    : await ajax.post(urlJoin(arrangerApiRoot, `/${arrangerProjectId}/graphql`), body);

const buildFileQuery = ({ fields, first = null }) => {
  const firstString = first === null ? '' : `, first:${first}`;
  return `query ($sqon: JSON) {file {hits(filters: $sqon${firstString}) {total, edges {node {${fields.reduce(
    (a, b) => a + ' ' + b,
  )}}}}}}`;
};

const getFileTotals = async ({ sqon, api }) => {
  const body = {
    query: buildFileQuery({ fields: ['id'] }),
    variables: { sqon },
  };
  try {
    const response = await graphql({ api, body });
    return response.data.file.hits.total;
  } catch (error) {
    console.warn(error);
  }
};

export const getFilesById = async ({ ids, fields, api }) => {
  const query = buildFileQuery({ fields, first: ids.length });
  const sqon = {
    op: 'and',
    content: [{ op: 'in', content: { field: '_id', value: ids } }],
  };
  const body = { query, variables: { sqon } };

  let edges;
  try {
    const response = await graphql({ api, body });
    edges = response.data.file.hits.edges;
  } catch (error) {
    console.warn(error);
  }
  return edges;
};

export const getFilesByQuery = async ({ sqon, fields, api }) => {
  const first = await getFileTotals({ sqon });

  const query = buildFileQuery({ fields, first });
  const body = { query, variables: { sqon } };

  let edges;
  try {
    const response = await graphql({ api, body });
    edges = response.data.file.hits.edges;
  } catch (error) {
    console.warn(error);
  }
  return edges;
};
export default graphql;
