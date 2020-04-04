import axios from 'axios'
import cloneDeep from 'lodash/cloneDeep'
import Data from '@/data/data.json'

export const state = () => ({
  data: Data
})

export const mutations = {
  getData(state, payload) {
    state.data = payload.data
  }
}

export const actions = {
  async getDataAction(context) {
    const payload = {
      data: Data
    }
    await axios.get(process.env.dataUrl).then(res => {
      payload.data = cloneDeep(res.data)
    })
    context.commit('getData', payload)
  }
}
