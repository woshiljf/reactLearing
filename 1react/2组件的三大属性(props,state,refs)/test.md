 class Add extends React.Component{ constructor(props) { super(props); this.addHandle = this.addHandle.bind(this) } addHandle(){ const {addData} = this.props ;var value = this.inputAdd.value ;if(!value) return value = value.trim(); addData(value)
        } render(){ return (

        <div>

            <input ref={ input=> this.inputAdd = input} type="text"/>

            <button onClick={ this.addHandle}>添加数据</button>

        </div>


        ) } } class List extends React.Component{ constructor(props) { super(props); } render(){ const {data} = this.props ;return (

        <ul>

            { data.map((item,index)=>{ return (

            <li key={index}>{item}</li>

            ) }) }

        </ul>



        ) } }