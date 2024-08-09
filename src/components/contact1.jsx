import React from 'react'
import { useForm } from "react-hook-form"


function contact1() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data);
    window.alert("Form Submitted!");
    window.location.reload();
  }
  return (
    <div>
      <section id="ContactMe">
        {/* ContactMe Section */}


        <div className="contactlogo flex justify-center text-3xl font-serif mt-10">
          <span className="material-symbols-outlined text-3xl pr-1">
            headset_mic
          </span>
          Contact <span className="pl-2 text-[#8d3ed6]">Me</span>
        </div>
        <div className="box3 h-[31rem] w-[73%] bg-slate-50 ml-64 mt-14 rounded-xl mb-16 flex">
          <div className="image9 h-[23rem] w-[50%] pr-16 pt-14">
            <img src="src/bg1.jpg" alt="" />
          </div>
          { /*form*/}
          <form action="" onSubmit={handleSubmit(onSubmit)}>
            <div className="heya text-white ml-20">
              <div className="flex flex-col justify-center items-center mr-2">

                <div className='flex items-center border border-gray-600 rounded-lg bg-[#461a6c] pr-28 py-2 mt-16 mr-2 shadow-lg shadow-[#111012]'>
                  <span className="material-symbols-outlined px-2 text-white">
                    person
                  </span>
                  <input className='bg-[#461a6c] border-[#461a6c] text-white placeholder-slate-300 flex-col '

                    type="text" placeholder='username '
                    {...register("username", {
                      required: { value: true, message: "fill this first" }, minLength: { value: 3, message: "the value is less than three" },
                      maxLength: { value: 20, message: "The value is more than 20 " }
                    })} /></div>
                {errors.username && <div className='text-red-700 font-mono mt-1'>{errors.username.message}</div>}





                <div className="flex items-center border border-gray-600 rounded-lg bg-[#461a6c] pr-28 py-2 mt-3 mr-2 shadow-lg shadow-[#111012]">
                  <span className="material-symbols-outlined px-2 text-white">
                    call
                  </span>
                  <input className='bg-[#461a6c] border-[#461a6c] text-white placeholder-slate-300 flex-col '

                    type="text" placeholder='phone'
                    {...register("phone", {
                      required: { value: true, message: "Fill this " }, minLength: { value: 10, message: "the value is less than 10" },
                      maxLength: { value: 10, message: "Tera number 11 digit ka hai kya" }
                    })} />
                </div>
                {errors.phone && <div className='text-red-700 font-mono mt-1'>{errors.phone.message}</div>}
                <div className="flex items-center border border-gray-600 rounded-lg bg-[#461a6c] pr-28 py-2 mt-3 mr-2 shadow-lg shadow-[#111012]">
                  <span className="material-symbols-outlined px-2 text-white">
                    mail
                  </span>
                  <input className='bg-[#461a6c] border-[#461a6c] text-white placeholder-slate-300 flex-col '

                    type="text" placeholder='Email '
                    {...register("Email", {
                      required: { value: true, message: "fill this" }, /*minLength: { value: 10, message: "the value is less than 10" }, 
                maxLength: { value: 20, message: "The value is more than 20 " } }*/})} />
                </div>
                {errors.Email && <div className='text-red-700 font-mono mt-1'>{errors.Email.message}</div>}

                <div className="flex items-center border border-gray-600 rounded-lg bg-[#461a6c] pr-28 pt-3 pb-20 mt-3 mr-2 shadow-lg shadow-[#111012]">
                  <span className="material-symbols-outlined pl-3 pr-2 text-white">
                    message
                  </span>
                  <input
                    type="text"
                    placeholder="Message"
                    className="outline-none placeholder-slate-300 text-white flex-1 py-1 bg-[#461a6c]"
                  />
                </div><div type='submit' value="Submit" >
                <button className="button mt-4 -ml-[11rem]  text-white font-semibold py-2 px-4 flex items-center space-x-1 hover:bg-[#392760] bg-[#391f72] shadow-lg 
                  shadow-[#111012] ... rounded-lg active:border-collapse">
                  Submit
                  <span className="arrow">&gt;</span>
                </button></div>
              </div></div>
          </form>
        </div>
      </section>


    </div>
  )
}
export default contact1