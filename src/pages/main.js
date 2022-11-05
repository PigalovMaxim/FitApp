import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Main() {
  return <section className="w-full h-full flex flex-col justify-start items-center pt-10">
    <div className='w-[60%] flex flex-col justify-start items-center'>
        <CircularProgressbarWithChildren value="80" styles={{path: { stroke: '#2B4570' }}}> 
            <h1 className='text-main-color text-[24px] font-bold'>Прогресс 80%</h1>
        </CircularProgressbarWithChildren>
    </div>
    <h1 className='text-main-color text-[24px] font-bold mt-3'>День 5</h1>
    <h1 className='text-main-color text-[24px] font-bold mt-5'>Цели на день:</h1>
    <div className='w-[90%] mt-5'>

    </div>
  </section>;
}

export default Main;
