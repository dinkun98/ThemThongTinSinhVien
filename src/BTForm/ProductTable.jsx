// rafc
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btFormActions } from '../store/BTForm/slice'

export const ProductTable = () => {
    const { productList } = useSelector((state) => state.btForm)
    console.log('productList: ', productList)

    const dispatch = useDispatch()

    return (
        <div className="mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>MASV</th>
                        <th>Họ tên</th>
                        <th>Số điện thoại</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.hoTen}</td>
                                <td>{product.soDienThoai}</td>
                                <td>{product.email}</td>
                                <td style={{ width: 120 }}>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => {
                                            dispatch(btFormActions.deleteProduct(product.id))
                                        }}
                                    >
                                        <i class="fa-solid fa-trash-can"></i>
                                    </button>
                                    <button
                                        className="btn btn-success ms-3"
                                        onClick={() => {
                                            dispatch(btFormActions.setProductEdit(product))
                                        }}
                                    >
                                        <i class="fa-solid fa-pen-to-square"></i>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
