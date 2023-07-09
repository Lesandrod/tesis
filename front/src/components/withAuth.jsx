"use client"

import { redirect } from 'next/navigation';
export function WithAuth(WrappedComponent) {
  return  (props) => {

    // const { push } = useRouter();

       if (!localStorage.getItem('token')){
            redirect('/login');
       }else{return <WrappedComponent {...props} />;}
 

    
  };
}