// rafc
import './style.css'
// => ảnh hưởng toàn bộ dự án

import style from './style.module.css'
// => chỉ ảnh hưởng tới component đc import

export const StyleComponent = () => {
    return (
        <div className="container mt-3">
            <h1>StyleComponent</h1>
            <p className="title">Title</p>
            <p className={`${style.subTitle} ${style['heading']}`}>Sub Title</p>
            <p className={style['sub-Title']}>Sub Title 1</p>
            <p
                className="description"
                style={{
                    fontSize: 40,
                    color: 'pink',
                    marginTop: 30,
                }}
            >
                Description
            </p>
        </div>
    )
}
