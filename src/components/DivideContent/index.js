import React, {Component} from 'react';
import './styles.scss';

function chunkList(list, chunks){
  var start=0;
  var chunked = [];
  for(let i=0; i<chunks;i++){
    let slice = Math.ceil(list.slice(start).length/(chunks-i));
    chunked.push(list.slice(start,start+slice));
    start+=slice;
  }
  return chunked;
}

export class DivideContent extends Component{
	render(){
		let bootLvl = this.props.bootLvl? this.props.bootLvl: 'xs';
		let columnClass=this.props.className+ " col-"+bootLvl+"-" +(Math.floor(12/this.props.chunk));
		return (
		<div className='divide-row'>
				{chunkList(this.props.list,this.props.chunk).map(list =>
				<ul className={columnClass}>
						{list.map((elem,index) =>
						<li key={index}>{elem}</li>
						)}
				</ul>
				)}
		</div>
		)
	}
}
