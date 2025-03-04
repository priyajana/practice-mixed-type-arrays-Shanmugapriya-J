//Task 1: Create the Profile.

let profileArr = Array(1);

profileArr.fill({
    user_name:'Alice',
    age:25,
    subscription_status:true,
    location:"10 Downing Street,UK",
    hobbies:["Reading","Skiing","Figure Skating"]});

//Task 2: Access and Log Profile Details

    console.log(profileArr[0]['user_name']);
    console.log(profileArr[0]['hobbies'][1]);

//Task 3: Modify the Profile

    profileArr[0]['age']=58;
    profileArr[0]['hobbies'].push('Drawing');

//Task 4: Display the Updated Profile

    console.log(profileArr);