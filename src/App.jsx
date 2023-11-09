// import { FunctionComponent } from './DemoComponent/FunctionComponent'
// import ClassComponent from './DemoComponent/ClassComponent'

import { BTForm } from './BTForm/BTForm'


// JSX => Javascript XML => cú pháp hỗ trợ viết thẻ html ở trong javascript
// attribute => viết theo quy tắc camelCase

// 2 loại component:
// class Component (statefull component) (Hiện tại ko sử dụng) - react life cycle

// function component (stateless component)

// 1 component chỉ đc phép return về duy nhất 1 thẻ jsx

// component lớn nhất trong dự án
function App() {
    return (
        <div className="description" tabIndex="1">
            {/* <FunctionComponent></FunctionComponent>
            <ClassComponent /> */}

    
            <BTForm />
           
        </div>
    )
}

export default App

// npm i redux react-redux

// npm create vite@latest
