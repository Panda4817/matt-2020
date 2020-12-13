import React from 'react'
import parse from 'html-react-parser';
import './Month.css'

const Month = ({month, info}) => {


    return (
        <>
          
            <button className="col-11 col-md-4 col-lg-3 col-xl-2 btn btn-block btn-primary m-1" data-toggle="modal" data-target={"#" + month + 'modal'}>
                {month}
            </button>
            
            <div className="modal fade" id={month + 'modal'} tabIndex="-1" aria-labelledby={month + 'label'} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id={month + 'modalTitle'}>{info.title}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {parse(info.main)}
                        </div>
                    
                    </div>
                </div>
            </div>

        </>
    )


}

export default Month