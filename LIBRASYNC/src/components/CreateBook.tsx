import Close from '../assets/close.svg';
import { CreateBookModal } from '../types/CreateBookModal';

export const CreateBook: React.FC<CreateBookModal> = ({closeModalHandler}) => {
  return (
    <div className='z-0 w-full h-full fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center bg-black/50'>
      <div className='bg-white w-96 h-96 fixed z-10 border shadow-md flex flex-col items-end p-3'>
        <button onClick={closeModalHandler}>
          <img src={Close} alt="Close" />
        </button>
      </div>
    </div>
  )
}