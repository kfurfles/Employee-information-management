import { 
    groupBy
} from 'lodash'

export default{
    lastRegisteredUSer(state){
        return state.list[state.list.length - 1]
    },
    insighUsers(state,getter){
        return { 
            variant: 'blue',
            data: {
                title: 'Registered users',
                footerTitle: 'Last logged in user',
                mainData: state.list.length,
                footerData: getter.lastRegisteredUSer
            }
        } 
    },
    companyData(state){
        let ascOrder = (a,b) => a.users.length > b.users.length ? -1 : 1
        let list = formatedUserList(state.list).sort(ascOrder)
        let noneItem = list.findIndex(el => el.company === 'none');
        if (noneItem > -1) {
            noneItem = list.splice(noneItem, 1);
        }

        return {
            none: noneItem,
            list: list,
        }
    },
    topCompanyByUser(state,getter){
        const { none, list } = getter.companyData

        // const others = list.splice(4)
        // const topFourColors = [ '#4bc0c0', '#ff9f40', '#36a2eb', '#ffcd56' ]
        // const otherColor = ['#ff6384']
        // const none = ['#9966ff']
        // let f = { labels: [ 'Red', 'Yellow', 'Blue' ],
        //             datasets: [
        //                 {
        //                     label: ['one','two','three'],
        //                     backgroundColor: [ '#3b9b73', '#bd5a4b', '#07b5d6', '#9b59b6' ],
        //                     // borderColor: 'rgb(255, 99, 132)',
        //                     data: [10,20,30]
        //                 },
        //             ],
        // }
        return {
            
        }
    },
    dataCompanyChart(state,getter){
        return ''
    }
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