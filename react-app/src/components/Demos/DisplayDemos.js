import React from 'react'
import DeleteDemoModal from './DeleteDemoModal';
import { deleteDemo } from '../../store/demos';
import { useModal } from '../../context/Modal';


function DisplayDemos({userDemos, dispatch}) {
    const handleDelete = async (demo) => {
        await dispatch(deleteDemo(demo));
        closeModal();
    };
    const { setModalContent, closeModal } = useModal();

  return (
      (
          <div className='flex flex-col gap-5 '>
              {userDemos.map((demo, idx) => {
                  return (
                      <div key={`index-to-demos-${idx}`} className="flex w-full items-center justify-between flex-col md:flex-row border-ug-grey border-2  p-2 rounded">
                          <audio controls>
                              <source src={demo.file_link} type="audio/mp3" />
                              Your browser does not support the audio element.
                          </audio>
                          <div className="demo-details">
                              <div className='flex flex-col md:flex-row items-center gap-5'>
                                  <p className='text-xs md:text-base'>
                                      {demo.name}
                                  </p>
                                  <span className='text-[10px] text-ug-grey'>{demo.created_at.split(' ').splice(0, 4).join(' ')}</span>
                              </div>

                              <i
                                  onClick={() => setModalContent(<DeleteDemoModal demo={demo} handleDelete={handleDelete} closeModal={closeModal} />)}
                                  className="fa fa-trash self-center md:self-end"
                              ></i>
                          </div>
                      </div>
                  );
              }).reverse()}
          </div>
      )
  )
}

export default DisplayDemos
