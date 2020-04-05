export default async ({ store }) => {
  if (!Object.keys(store.state.data.data).length) {
    await store.dispatch('data/getDataAction')
  }
}
