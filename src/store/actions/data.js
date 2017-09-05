import * as api from './../../api/index.js'
import * as urls from './../../api/api_config.js'
import * as types from './../mutation-types.js'
import { getParamString } from './../../utils/util.js'

export const getRechargeItems = ({ commit, state }) => {
  let getRechargeItemsUrl = urls.getRechargeItemsUrl + '?' + getParamString()
  return api.get(getRechargeItemsUrl)
}

export const getBalance = ({ commit, state }) => {
  let getBalanceUrl = urls.getBalanceUrl + '?' + getParamString()
  return api.get(getBalanceUrl).then(reply => {
    commit(types.GET_BALANCE, reply.balance)
  })
}
