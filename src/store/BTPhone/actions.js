import { BTPHONE_TYPE } from './type'

export const btPhoneActions = {
    setProductDetail: (payload) => {
        return {
            type: BTPHONE_TYPE.setProductDetail,
            payload,
        }
    },
    addCart: (payload) => {
        return {
            type: BTPHONE_TYPE.addCart,
            payload,
        }
    },
    handleCartQuantity: (payload) => {
        return {
            type: BTPHONE_TYPE.handleCartQuantity,
            payload,
        }
    },
    deleteCart: (payload) => {
        return {
            type: BTPHONE_TYPE.deleteCart,
            payload,
        }
    },
}
