import React, { Component } from 'react';
import route from '/imports/routing/router.js';
import Items from '../api/advertiser/collections.js';
import {Uploads2} from '/imports/ui/Upload2.jsx';
import {withTracker} from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Mongo } from 'meteor/mongo';

export class Dashboard2 extends Component {

  logUserOut = (e) => {
    e.preventDefault();
    Meteor.logout();
    route.go("/login");
  }


  welcome = () => {
    if (Meteor.user()){
      const name = Meteor.user().profile.name
      return(name);
    }
  }

  deleteProfile = (e, id) => {
    Meteor.call('items.delete', id);
  }

  getAllItems=()=>{
    const items = this.props.items;
    return items.map((item) => {
      return (
        <div key = {item._id} className="card border-primary">
          <img className="card-img-top" src={item.image} style={{width: 100 + "%"}} alt="Card image cap"/>
          <div className="card-body">
            <h5 className="card-title"><strong>Product Name:</strong> {item.itemName}</h5>
            <h6 className="card-subtitle mb-2"><strong>Condition:</strong> {item.itemCondition}</h6>
            <h6 className="card-subtitle mb-2"><strong>Price:</strong>K {item.price}</h6>
            <p className="card-text"><strong>Description:</strong> {item.description}</p>
            <a href="" className="btn btn-primary edit" onClick = {this.editProfile}>Edit <i className="fa fa-edit"></i></a>
            <a href="" className="btn btn-danger delete" data-toggle="modal" data-target="#exampleModal" onClick = {this.warning}>Delete <i className="fa fa-trash"></i></a>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Delete Item</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    Are you sure you want to delete this file?
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-danger" data-dismiss="modal" onClick = {e => this.deleteProfile(e, pet._id)}>Yes, delete</button>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="card-footer">
            <small className="text-muted">Posted 3 mins ago</small>
          </div>
        </div>
      )
    }
  )
}

  render(){
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-light">
          <span className="navbar-brand mb-0 h1" href="#"><img src="images/logo.png" alt="" />Pet Connections</span>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pets</a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a className="dropdown-item" href="/dogs">Dogs</a>
                <a className="dropdown-item" href="/cats">Cats</a>
                <a className="dropdown-item" href="/birds">Birds</a>
              </div>
            </li>
              <li className="nav-item">
                <a className="nav-link" href="" onClick={this.logUserOut}>Log Out</a>
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Dashboard</h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group mr-2">
              <button class="btn btn-sm btn-outline-secondary">Share</button>
              <button class="btn btn-sm btn-outline-secondary">Export</button>
            </div>
            <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
              <span data-feather="calendar"></span>
              This week
            </button>
          </div>
        </div>

        <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>

        <h2>Section title</h2>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
                <th>Header</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,001</td>
                <td>Lorem</td>
                <td>ipsum</td>
                <td>dolor</td>
                <td>sit</td>
              </tr>
              <tr>
                <td>1,002</td>
                <td>amet</td>
                <td>consectetur</td>
                <td>adipiscing</td>
                <td>elit</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>Integer</td>
                <td>nec</td>
                <td>odio</td>
                <td>Praesent</td>
              </tr>
              <tr>
                <td>1,003</td>
                <td>libero</td>
                <td>Sed</td>
                <td>cursus</td>
                <td>ante</td>
              </tr>
              <tr>
                <td>1,004</td>
                <td>dapibus</td>
                <td>diam</td>
                <td>Sed</td>
                <td>nisi</td>
              </tr>
              <tr>
                <td>1,005</td>
                <td>Nulla</td>
                <td>quis</td>
                <td>sem</td>
                <td>at</td>
              </tr>
              <tr>
                <td>1,006</td>
                <td>nibh</td>
                <td>elementum</td>
                <td>imperdiet</td>
                <td>Duis</td>
              </tr>
              <tr>
                <td>1,007</td>
                <td>sagittis</td>
                <td>ipsum</td>
                <td>Praesent</td>
                <td>mauris</td>
              </tr>
              <tr>
                <td>1,008</td>
                <td>Fusce</td>
                <td>nec</td>
                <td>tellus</td>
                <td>sed</td>
              </tr>
              <tr>
                <td>1,009</td>
                <td>augue</td>
                <td>semper</td>
                <td>porta</td>
                <td>Mauris</td>
              </tr>
              <tr>
                <td>1,010</td>
                <td>massa</td>
                <td>Vestibulum</td>
                <td>lacinia</td>
                <td>arcu</td>
              </tr>
              <tr>
                <td>1,011</td>
                <td>eget</td> <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 class="h2">Dashboard</h1>
                  <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group mr-2">
                      <button class="btn btn-sm btn-outline-secondary">Share</button>
                      <button class="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button class="btn btn-sm btn-outline-secondary dropdown-toggle">
                      <span data-feather="calendar"></span>
                      This week
                    </button>
                  </div>
                </div>
      
                <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>
      
                <h2>Section title</h2>
                <div class="table-responsive">
                  <table class="table table-striped table-sm">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                        <th>Header</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1,001</td>
                        <td>Lorem</td>
                        <td>ipsum</td>
                        <td>dolor</td>
                        <td>sit</td>
                      </tr>
                      <tr>
                        <td>1,002</td>
                        <td>amet</td>
                        <td>consectetur</td>
                        <td>adipiscing</td>
                        <td>elit</td>
                      </tr>
                      <tr>
                        <td>1,003</td>
                        <td>Integer</td>
                        <td>nec</td>
                        <td>odio</td>
                        <td>Praesent</td>
                      </tr>
                      <tr>
                        <td>1,003</td>
                        <td>libero</td>
                        <td>Sed</td>
                        <td>cursus</td>
                        <td>ante</td>
                      </tr>
                      <tr>
                        <td>1,004</td>
                        <td>dapibus</td>
                        <td>diam</td>
                        <td>Sed</td>
                        <td>nisi</td>
                      </tr>
                      <tr>
                        <td>1,005</td>
                        <td>Nulla</td>
                        <td>quis</td>
                        <td>sem</td>
                        <td>at</td>
                      </tr>
                      <tr>
                        <td>1,006</td>
                        <td>nibh</td>
                        <td>elementum</td>
                        <td>imperdiet</td>
                        <td>Duis</td>
                      </tr>
                      <tr>
                        <td>1,007</td>
                        <td>sagittis</td>
                        <td>ipsum</td>
                        <td>Praesent</td>
                        <td>mauris</td>
                      </tr>
                      <tr>
                        <td>1,008</td>
                        <td>Fusce</td>
                        <td>nec</td>
                        <td>tellus</td>
                        <td>sed</td>
                      </tr>
                      <tr>
                        <td>1,009</td>
                        <td>augue</td>
                        <td>semper</td>
                        <td>porta</td>
                        <td>Mauris</td>
                      </tr>
                      <tr>
                        <td>1,010</td>
                        <td>massa</td>
                        <td>Vestibulum</td>
                        <td>lacinia</td>
                        <td>arcu</td>
                      </tr>
                      <tr>
                        <td>1,011</td>
                        <td>eget</td>
                        <td>nulla</td>
                        <td>Class</td>
                        <td>aptent</td>
                      </tr>
                      <tr>
                        <td>1,012</td>
                        <td>taciti</td>
                        <td>sociosqu</td>
                        <td>ad</td>
                        <td>litora</td>
                      </tr>
                      <tr>
                        <td>1,013</td>
                        <td>torquent</td>
                        <td>per</td>
                        <td>conubia</td>
                        <td>nostra</td>
                      </tr>
                      <tr>
                        <td>1,014</td>
                        <td>per</td>
                        <td>inceptos</td>
                        <td>himenaeos</td>
                        <td>Curabitur</td>
                      </tr>
                      <tr>
                        <td>1,015</td>
                        <td>sodales</td>
                        <td>ligula</td>
                        <td>in</td>
                        <td>libero</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </main>
                <td>nulla</td>
                <td>Class</td>
                <td>aptent</td>
              </tr>
              <tr>
                <td>1,012</td>
                <td>taciti</td>
                <td>sociosqu</td>
                <td>ad</td>
                <td>litora</td>
              </tr>
              <tr>
                <td>1,013</td>
                <td>torquent</td>
                <td>per</td>
                <td>conubia</td>
                <td>nostra</td>
              </tr>
              <tr>
                <td>1,014</td>
                <td>per</td>
                <td>inceptos</td>
                <td>himenaeos</td>
                <td>Curabitur</td>
              </tr>
              <tr>
                <td>1,015</td>
                <td>sodales</td>
                <td>ligula</td>
                <td>in</td>
                <td>libero</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>

        <div className="container">
          <div className="card-columns">
              {this.getAllItems()}
          </div>
        </div>

      </div>
    );
  }
}

export default withTracker(() =>{
  Meteor.subscribe('items')
  const currentUserId = Meteor.userId();
  return{
    items : Items.find({ createdBy: currentUserId }).fetch(),
  }

})(Dashboard2);
