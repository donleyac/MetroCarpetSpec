import React, {Component} from 'react';
import './styles.scss';

function chunkList(list, chunkSize){
  var start=0;
  var chunked = [];
  for(let i=0; i<chunkSize.length; i++){
    let slice = chunkSize[i];
    chunked.push(list.slice(start,start+slice));
    start+=slice;
	}
  return chunked;
}

export class DivideContent extends Component{
	render(){
		let bootLvl = this.props.bootLvl? this.props.bootLvl: 'xs';
		let columnClass=this.props.className+ " col-"+bootLvl+"-" + 4
		return (
		<div className='divide-row'>
				{chunkList(this.props.list,this.props.chunkSize).map(list =>
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
