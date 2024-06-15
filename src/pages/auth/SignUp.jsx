import React from 'react'
import banner2 from '../../assets/banner2.png'
import { Link } from 'react-router-dom'
export default function SignUp() {
  return (
    <div className='flex'>
<div className='w-2/5'><img src={banner2}/></div>
<div className='w-3/5 p-10'>
 <div className='text-center mb-5'>
    <div className='font-medium uppercase text-2xl mb-3'>TẠO TÀI KHOẢN GHN</div>
    <div className='font-medium text-orange-500 text-xl'>GHN luôn đồng hành cùng bạn</div>
 </div>

 <div className='grid grid-cols-2 gap-5 mb-10'>
    <div>
        <div className='font-medium mb-2'>Tên tài khoản</div>
        <input className='w-full rounded-2xl p-2 border-2' placeholder='Tên tài khoản'/>
    </div>
    <div>
        <div className='font-medium mb-2'>Số điện thoại</div>
        <input className='w-full rounded-2xl p-2 border-2' placeholder='Nhập số điện thoại'/>
    </div>
    <div>
        <div className='font-medium mb-2'>Email</div>
        <input className='w-full rounded-2xl p-2 border-2' placeholder='Nhập Email'/>
    </div>
    <div>
        <div className='font-medium mb-2'>Mật khẩu</div>
        <input className='w-full rounded-2xl p-2 border-2' placeholder='Tối thiểu 8 ký tự bao gồm chữ cái và số'/>
    </div>
    <div>
        <div className='font-medium mb-2'>Nhập lại mật khẩu</div>
        <input className='w-full rounded-2xl p-2 border-2' placeholder='Tối thiểu 8 ký tự bao gồm chữ cái và số'/>
    </div>
 </div>

 <div className='mb-10 flex'><input type='radio' className='mr-2 w-5'/> <div className='text-wrap'>Tôi đã đọc và đồng ý với Điều khoản dịch vụ và Chính sách bảo mật, bảo vệ dữ liệu cá nhân của Giao Hàng Nhanh.</div></div>

    <button className='w-1/3 block mb-3 text-white m-auto py-2 font-medium text-lg rounded-xl bg-orange-500'>Đăng ký</button>
    <div className='text-center'><span className='font-medium'>Bạn đã</span> có tài khoản? <Link to={"/signIn"} className='text-orange-500'>Đăng nhập ngay</Link></div>
</div>
    </div>
  )
}
