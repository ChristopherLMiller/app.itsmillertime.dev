// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getBuildTime = async (id: string): Promise<any> => {
  const response = await fetch(`/api/models/buildtime`, {
    method: `POST`,
    body: JSON.stringify({
      project_id: id,
    }),
  });

  console.log(response);
};
