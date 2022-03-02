import React from "react";


export const userStoreContext =React.createContext();

const UserStoreProvider =({children})=>{
    const[profile,setProflie]=React.useState(null);
    //กำหนดตัวแปร userStore เพือเก็บข้อมูล profile ทั้งหมด
    const userStore={
        profile:profile,
        updateProfile :(profile)=>setProflie(profile)
    }
    return(
        <userStoreContext.Provider value={userStore}>
            {children}
        </userStoreContext.Provider>
    )
}

export default UserStoreProvider;