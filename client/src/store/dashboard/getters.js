import { 
    groupBy
} from 'lodash'

export default{
    userList(state, getter, rootState){
        return rootState.Users.list
    },
    insighUsers(state, getter, rootState, rootGetters){
        const { name = '' } = rootGetters["Users/lastRegisteredUSer"] || {}
        return { 
            variant: 'blue',
            data: {
                title: 'Registered users',
                footerTitle: 'Last logged in user',
                mainData: getter.userList.length,
                footerData: name
            }
        } 
    },
    insighCompany(state, getter){
        const { list } = getter.companyData
        const topCompany = list.length > 0 ? list[0] : 'None' 
        return { 
            variant: 'green',
            data: {
                title: 'Companies in the system',
                footerTitle: 'Company with more employees',
                footerData: topCompany.company,
                mainData: list.length 
            } 
        }
    },
    insighSalary(state, getter){
        
        let defaultData = { 
            variant: 'pink',
            data: {
                title: 'Companies in the system',
                footerTitle: '',
                mainData: '', 
                footerData: ''
            } 
        }
        const listSalary = getter.companyData.list
            .reduce((acc,cur) => acc.concat(cur.users),[])
            .sort((a,b) => a.salary > b.salary ? 1 : -1)

        if (listSalary.length) {
            const lowest = listSalary.length > 0 ? listSalary[0] : { name: 'None', salary: 0 }
            const highest = listSalary[listSalary.length - 1]
        
            const maxWords = ({ name },n) => `${name.substr(0,n)}...`
            const fSalary = ({ salary }) => salary.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
            
            const highestMessage = `Highest salary: ${maxWords(highest,10)} || R$ ${fSalary(highest)}`
            // const leftMessage = `Highest salary: ${maxWords(highest,10)} ||  salary: R$${maxWords(lowest,10)}`
            const lowestMessage = `Lowerest salary: ${maxWords(lowest,10)} || R$ ${fSalary(lowest)}`
    
            return {
                ...defaultData,
                data: {
                    ...defaultData.data,
                    footerTitle: highestMessage,
                    mainData: listSalary.length, 
                    footerData: lowestMessage
                }
            }
            
        } else{
            return defaultData
        }      

       
    },
    allInsights(state, getter){
        const { insighUsers, insighCompany, insighSalary } = getter
        return [ insighUsers, insighCompany, insighSalary ]
    },
    companyData(state, getter){
        let ascOrder = (a,b) => a.users.length > b.users.length ? -1 : 1
        let list = formatedUserList(getter.userList).sort(ascOrder)
        let noneItem = list.findIndex(el => el.company === 'none');
        if (noneItem > -1) {
            noneItem = list.splice(noneItem, 1);
        }

        return {
            none: noneItem,
            list: list,
        }
    },
    // topCompanyByUser(state,getter){
    //     const { none, list } = getter.companyData

    //     // const others = list.splice(4)
    //     // const topFourColors = [ '#4bc0c0', '#ff9f40', '#36a2eb', '#ffcd56' ]
    //     // const otherColor = ['#ff6384']
    //     // const none = ['#9966ff']
    //     // let f = { labels: [ 'Red', 'Yellow', 'Blue' ],
    //     //             datasets: [
    //     //                 {
    //     //                     label: ['one','two','three'],
    //     //                     backgroundColor: [ '#3b9b73', '#bd5a4b', '#07b5d6', '#9b59b6' ],
    //     //                     // borderColor: 'rgb(255, 99, 132)',
    //     //                     data: [10,20,30]
    //     //                 },
    //     //             ],
    //     // }
    //     return {
            
    //     }
    // },
    // dataCompanyChart(state,getter){
    //     return ''
    // }
}

function getCompany(obj){
    return obj.hasOwnProperty('company') ? obj.company.toLowerCase() : 'none'
} 

function formatedUserList(list){
    const formatedList = list.map(u =>{
        return{
            ...u,
            company: getCompany(u)
        }
    })
    return objToArray(groupBy(formatedList,'company'))
}

function objToArray(obj){
    return Object.keys(obj).map(key => {
        return {
            company: key,
            users: obj[key] 
        }
    }) 
}