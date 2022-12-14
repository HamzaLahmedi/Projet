import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from 'react-redux';
import EditProfile from '../components/EditProfile';
import { deleteProfile } from '../redux/actions/contactActions';

function Profile() {
  
  const user=useSelector(state=>state.authReducer.user)
  console.log(user)

const dispatch=useDispatch()
const handleDelete=()=>{
  dispatch(deleteProfile(user._id))
}

  return (
    
    
   
    <div>
      <div className="page-content page-container" id="page-content">
  <div className="padding">
    <div className="row container d-flex justify-content-center">
      <div className="col-xl-6 col-md-12">
        <div className="card user-card-full">
          <div className="row m-l-0 m-r-0">
            <div className="col-sm-4 bg-c-lite-green user-profile">
              <div className="card-block text-center text-white">
                <div className="m-b-25">
                  <img
                    src="https://img.icons8.com/bubbles/100/000000/user.png"
                    className="img-radius"
                    alt="User-Profile-Image"
                  />
                </div>
                <h6 className="f-w-600">{user?.userName}</h6>
                <p>{user?.role}</p>
                <i className=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16" />
              </div>
            </div>
            <div className="col-sm-8">
              <div className="card-block">
                <h6 className="m-b-20 p-b-5 b-b-default f-w-600">
                  Information
                </h6>
                <div className="row">
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">Email</p>
                    <h6 className="text-muted f-w-400">{user?.email}</h6>
                  </div>
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">Age</p>
                    <h6 className="text-muted f-w-400">{user?.age}</h6>
                  </div>
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">Phone Number</p>
                    <h6 className="text-muted f-w-400">{user?.phone}</h6>
                  </div>
                  
                </div>
                
                <div className="row">
                  
                  <div className="col-sm-6">
                    <p className="m-b-10 f-w-600">description</p>
                    <h6 className="text-muted f-w-400">{user?.description}</h6>
                  </div>
                </div>
                <ul className="social-link list-unstyled m-t-40 m-b-10">
                  <li>
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title=""
                      data-original-title="facebook"
                      data-abc="true"
                    >
                      <i
                        className="mdi mdi-facebook feather icon-facebook facebook"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title=""
                      data-original-title="twitter"
                      data-abc="true"
                    >
                      <i
                        className="mdi mdi-twitter feather icon-twitter twitter"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#!"
                      data-toggle="tooltip"
                      data-placement="bottom"
                      title=""
                      data-original-title="instagram"
                      data-abc="true"
                    >
                      <i
                        className="mdi mdi-instagram feather icon-instagram instagram"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                </ul>
                
              </div>
              <EditProfile user={user} />
                <Button variant='danger' onClick={handleDelete}>Delete</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    </div>
     
    
  );
}

export default Profile;
