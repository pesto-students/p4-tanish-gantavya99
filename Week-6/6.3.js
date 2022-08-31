
//Can be optimized more using Binary search . Will push that code also in a while.
var sort=function(nums) {
    let count1=0;
    let count0=0;
    let count2=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]==0)
            count0++;
        else if(nums[i]==1)
            count1++;
        else
            count2++;
    }
    for(let i=0;i<count0;i++)
        nums[i]=0;
     for(let j=count0;j<count1+count0;j++)
        nums[j]=1;
     for(let k=count1+count0;k<count2+count1+count0;k++)
        nums[k]=2;  
};