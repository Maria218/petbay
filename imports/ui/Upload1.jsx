import React, { Component } from 'react';



 class Upload1 extends React.Component {
  constructor(props) {
   super(props);
   this.newPet = this.newPet.bind(this); //when save form
   this.savePet = this.savePet.bind(this); //localStorage & this.state
   this.removePet = this.removePet.bind(this);
   this.updatePet = this.updatePet.bind(this); //whan clicked save-icon in a Pet

   this.state = {Pets:[]};
 }

 componentDidMount() {
   let Pets = localStorage.getItem("Pets");
     if (Pets)
        this.setState({Pets: JSON.parse(Pets)});
 }

 newPet(title, text) { //prepend new object
   let Pets = [{title: title, text: text}].concat(this.state.Pets);
   this.savePet(Pets);
 }

 savePet(Pets) {
   localStorage.setItem('Pets', JSON.stringify(Pets));
   this.setState({Pets: Pets});
 }

 removePet(index) {
   let Pets = this.state.Pets;
   Pets.splice(index, 1);
   this.savePet(Pets);
 }

 updatePet(index, title, text) {
   let Pets = this.state.Pets;
   Pets[index].title = title;
   Pets[index].text = text;
   this.savePet(Pets);
 }

 render() { //Conditional rendering: Ternary operator shows saved Pets from local storage. Or plain text
  const instruction = <div className="col-xs-12 col-sm-6 offset-sm-3">The app uses local storage to keep changes in the client's cache.
                        Click orange round button &#x02197; to add a new Pet. You can edit or delete Pets.
                        If you delete your browser's temporary files then you will lose your Pets. </div>

  let Pets = this.state.Pets.map((obj, i) =>
              <Pet key={i} index={i} title={obj.title} text={obj.text} onUpdate={this.updatePet} onRemove={this.removePet} />
              );

   return ( <div>

   <div className="container-fluid">

             <div className="row header">
               <h1 className="col-2">Pettaker+</h1>
               <div className="col-1 offset-7 offset-md-9">
                 <button  type="button" className="btn btn-warning" data-toggle="collapse" data-target="#form">+</button>
               </div>
             </div>

             <Form onSend={this.newPet}/>

             <div className="container-fluid">
                 {this.state.Pets.length > 0 ? Pets : instruction }
             </div>

             <div className="row footer">

             </div>
           </div>
             <div className="jokes">
               <Jokes/>
             </div>

        </div>
   )
 }
}

class Form extends React.Component {
 constructor(props) {
   super(props);    //controlled component, so it needs so many handlers
   this.changeTitle = this.changeTitle.bind(this);
   this.changeText = this.changeText.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleCancel = this.handleCancel.bind(this);

   this.state = {title: '', text: ''};
 }

 changeTitle(e) {
   this.setState({title: e.target.value});
 }

 changeText(e) {
   this.setState({text: e.target.value});
 }

 handleSubmit(e) { //here is a "Lift state up" on the parent component
   this.props.onSend(this.state.title, this.state.text);
   this.handleCancel(e); //reset form text and cancel reload of the page
 }

 handleCancel(e) {
   this.setState({title: '', text: ''});
   e.preventDefault();
 }

 render() {
   return ( <form className="collapse" id="form">
                 <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Title</label>
                    <input type="text" value={this.state.title} onChange={this.changeTitle}
                           className="form-control" placeholder="Enter title" />
                 </div>

                 <div className="form-group">
                    <textarea  name="text" value={this.state.text} onChange={this.changeText}
                               placeholder="Enter message" className="form-control" rows="4"/>
                 </div>

                 <button onClick={this.handleSubmit} className="btn">Save</button>
                 <button onClick={this.handleCancel} className="btn">Cancel</button>
             </form>  )
 }
}

class Pet extends React.Component {
 constructor(props) {
   super(props);
   this.changeTitle = this.changeTitle.bind(this);
   this.changeText = this.changeText.bind(this);

   this.edit = this.edit.bind(this); //to the parent
   this.delete = this.delete.bind(this); //to the parent

   this.state = {title: this.props.title, text: this.props.text, editing: false}; //by default render as text
 }

 edit() { //lift state up to the parent
   this.props.onUpdate(this.props.index, this.state.title, this.state.text);
   this.setState({editing: !this.state.editing});
 }

 delete() { //lift state up to the parent
   this.props.onRemove(this.props.index);
 }

 changeTitle(e) {
   this.setState({title: e.target.value});
 }

 changeText(e) {
   this.setState({text: e.target.value});
 }

 renderPetOrEdit() { //when clicks edit button pencil-icon toggle between input and div
   if(this.state.editing) {
     return (<div className="inner">
               <div className="title">
                    <span>Title</span>
                    <button type="button" className="btn del" onClick={this.delete}><i className="fa fa-trash"></i></button>
                    <button type="button" className="btn save" onClick={this.edit}><i className="fa fa-floppy-o"></i></button>
               </div>

               <div className="form-group">
                   <input type="text" value={this.state.title} onChange={this.changeTitle} className="form-control" />
               </div>
               <div className="form-group">
                   <textarea  name="text" value={this.state.text} onChange={this.changeText} className="form-control" rows="4"/>
               </div>

            </div>)
   } else {
      return (<div className="inner">
                <div className="title">
                    <h2>{this.props.title}</h2>
                    <button type="button" className="btn del" onClick={this.delete}><i className="fa fa-trash"></i></button>
                    <button type="button" className="btn" onClick={this.edit}><i className="fa fa-pencil"></i></button>
                </div>
                <div className="text">
                  <p>{this.props.text}</p>
                </div>
              </div>)
   }
 }
 render() { //render function based on value {this.state.editing}
   return ( <div className="Pet col-sx-10 col-sm-6 col-md-4">
               {this.renderPetOrEdit()}
            </div>
   )
 }
}



export default Upload1;
