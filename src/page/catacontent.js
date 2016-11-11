import { Component } from "react";
import crypto from "crypto";

function md5(data) {
    let Buffer = require("buffer").Buffer;
    let buf = new Buffer(data);
    let str = buf.toString("binary");
    return "md5_" + crypto.createHash("md5").update(str).digest("hex");
}

class CataContent extends Component{
	constructor(){
		super(); //执行 Component 构造器方法
		//默认值
		this.state = {
			list : []
		};
	}
	//声明周期，当 dom 元素插入到页面后出发
	componentDidMount(){
		let { location } = this.props;
		//获取的地址栏中传入过来的参数
		let { query } = location;
		const that = this;
		$.get("/cata/content", query ,function(data){
			that.setState({
				//给 state 重新赋值
				list : data.result.data
			});
		},"json");
	}
	render(){
		let html = (<ul>
			{
				this.state.list.map((item,i)=>{
					let li = (<li key={ `content-${i}` }>
						<img src={ item.img }/>
						<p>{ item.catalog }</p>
						<p>{ item.bytime }</p>
					</li>);
					return li;
				})
			}
		</ul>);
		return html;
	}
}

export { CataContent }
