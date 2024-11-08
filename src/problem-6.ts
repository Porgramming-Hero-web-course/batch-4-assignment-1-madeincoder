{
// problem-6

interface Profile {
    name: string;
    age: number;
    email: string;
}

const updateProfile = ( profile: Profile, updates: Partial<Profile>):Profile => {

    const updatedProfile: Profile = {
        ...profile,
        ...updates,
    };
    return updatedProfile;
    
} 

const myProfile: Profile = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
};

const updatedProfile = updateProfile(myProfile, { age: 35});
console.log(updatedProfile);

//
}