import axios from 'axios'
import Data from '@/data/data.json'

export const state = () => ({
  data: {
    // contacts: {},
    // querents: {},
    // patients: {},
    // patients_summary: {},
    // discharges_summary: {},
    // inspections: {},
    // inspections_summary: {},
    // main_summary: {},
    // lastUpdate: ''
  }
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
      payload.data.contacts = res.data.contacts
      payload.data.inspections = res.data.inspections
      payload.data.inspections_summary = res.data.inspections_summary
      payload.data.lastUpdate = res.data.lastUpdate
    })
    context.commit('getData', payload)
  }
}
