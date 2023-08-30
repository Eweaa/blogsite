import React, { useState, useEffect } from 'react';
import ProfileCard from '../../Components/ProfileCard/ProfileCard';
import MyProfileCSS from './Profile.module.css';
import * as Icon from 'react-bootstrap-icons';
import Backdrop from '../../Components/Backdrop/Backdrop';
import axios from 'axios';
import { useAuth } from '../../Auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {

    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState(false);
    const [sendDataValues, setsendDataValues] = useState({title:'',content:''})
    const {currentUser, logout} = useAuth()
    const [error, setError] = useState('')
    const navigate = useNavigate()

    const SD = [
        {
            title: 'test1',
            description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel condimentum massa. Cras sed malesuada felis, a varius diam. Aliquam malesuada porttitor libero, ut pharetra nulla. Nunc lobortis eros gravida, finibus mi sed, iaculis odio. Integer dolor justo, fermentum a arcu id, aliquet varius neque. Phasellus quis sollicitudin orci. Pellentesque nec condimentum urna. Nunc leo tortor, dictum convallis neque non, sollicitudin dignissim ante.
            
            Pellentesque interdum semper elementum. Fusce ornare, nisl sit amet rhoncus tempus, est lorem convallis libero, quis interdum nisi mauris sed nunc. Phasellus mattis dolor auctor diam tincidunt, eget blandit mi commodo. Quisque pretium a magna quis dignissim. Nulla vehicula pharetra dignissim. Aliquam erat volutpat. Aenean sed ligula tincidunt, vulputate justo ac, pulvinar lectus. Duis rhoncus commodo purus eget rhoncus. Cras eget consectetur mi. Quisque lobortis maximus lobortis. Nunc vitae tristique arcu. Duis feugiat nunc eget sodales viverra. Sed dapibus ac risus at eleifend.
            
            Sed et sollicitudin odio, sollicitudin ultrices justo. Duis vel mattis diam, sit amet volutpat ante. Etiam dictum sagittis tellus et mollis. Phasellus porta iaculis nulla vitae euismod. Fusce viverra hendrerit ligula, eget sollicitudin erat varius sit amet. Morbi tempus urna ut felis malesuada, sit amet sagittis metus luctus. Nulla vulputate blandit urna, in condimentum.`,
            more:`test`
        },
        {
            title: 'test2',
            description: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at pharetra sapien. Aenean lobortis facilisis pretium. Vestibulum sit amet consequat arcu. Nullam eleifend fermentum urna, in porta felis ornare quis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin id diam ac turpis mollis rhoncus non et nisi. Ut ultricies gravida neque quis venenatis. Aliquam vitae felis finibus, auctor libero eu, fringilla metus. Cras cursus sapien id nisi sollicitudin, id pretium metus semper. Sed nec ultrices eros. Nunc ac mauris dapibus, interdum diam a, ornare est. Etiam feugiat tempor leo.
            Vestibulum cursus faucibus quam, ac aliquam est egestas et. Nulla facilisi. Duis eleifend pharetra arcu, sagittis lacinia dui fringilla id. Morbi ut justo nec nibh venenatis semper. Mauris tellus lectus, convallis id purus in, ullamcorper blandit urna. Donec posuere, quam sed rhoncus dictum, quam nisi efficitur elit, ut congue ex augue eu orci. Cras vel dictum nunc, non semper dui. Nunc eget enim semper nunc tempor euismod. Morbi tempus purus libero, sit amet vehicula nisi congue vitae. Proin in lectus ut mi efficitur tincidunt at ac nisl. Aliquam iaculis eu est consectetur lobortis. Sed interdum ex sem, rutrum pellentesque nulla ultricies nec. Curabitur vestibulum cursus quam, vitae commodo purus posuere in. Etiam quis ligula non sapien mattis tincidunt. Duis ullamcorper enim in ornare faucibus.
            Praesent condimentum dolor eu nisl scelerisque, eget pharetra ipsum gravida. Mauris id massa non ex cursus imperdiet. Sed sapien sapien, porttitor eu augue vulputate, gravida dignissim sem. Nulla maximus nisi ipsum, at consequat magna convallis ac. Mauris sed pharetra sem. Praesent et ultricies ligula. Nullam vestibulum a neque id aliquam. Aliquam cursus elit quam, a vulputate arcu viverra non. Nunc eu turpis elit. Etiam vehicula lorem vitae finibus tincidunt.
            Vestibulum vitae pharetra sem. Donec feugiat porttitor quam, a aliquet neque. Vestibulum rhoncus consectetur luctus. Vestibulum accumsan, massa vitae hendrerit molestie, metus purus faucibus nibh, id euismod lectus augue vitae est. Aenean tempus lectus non dictum eleifend. Aenean aliquam purus ac tortor facilisis efficitur. Phasellus tristique tempor felis, sit amet cursus mi. Maecenas in faucibus purus, et tincidunt ligula. Praesent egestas non est eu posuere. Maecenas porta velit ac accumsan eleifend. Vivamus tempor id felis eget blandit. Morbi ac urna ut massa suscipit imperdiet. Proin auctor nunc at metus hendrerit volutpat. Nunc vel nisl ultricies, pellentesque ipsum eu, congue metus. Maecenas nec sem luctus, tristique nisi at, malesuada massa. Donec et interdum velit.
            Morbi nec ultrices enim. Proin nec suscipit eros, eu aliquet nulla. Duis id mi eu diam porta cursus. Etiam a tincidunt diam, ut tristique nisl. Donec maximus, metus non aliquam suscipit, arcu mi luctus purus, id rutrum est leo et ligula. Pellentesque porta convallis libero sit amet elementum. Etiam in fringilla erat. Nunc non lectus et ex egestas dapibus. Nulla ac dui ut nulla laoreet dictum in et elit. Ut sagittis nibh elit, sit amet faucibus arcu bibendum at. Praesent dolor neque, commodo eget mauris ut, faucibus imperdiet neque. Sed feugiat neque in justo rutrum porta. Nullam vel ipsum ex. Duis quis neque finibus, congue dolor vitae, hendrerit massa. Nulla blandit semper suscipit.
            Nulla molestie tellus libero, vitae elementum elit porttitor et. Praesent ac pretium erat. Maecenas nec accumsan neque. Nullam nec varius quam, et vulputate massa. Ut est dolor, fringilla quis consequat vel, placerat ac erat. Nullam tempor sollicitudin mattis. Donec vitae accumsan du
            Vivamus euismod, massa id congue consequat, est leo fermentum est, vel vulputate mi magna eu neque. Etiam ullamcorper varius dignissim. Donec lacus nunc, dapibus a semper eu, feugiat eget diam. Sed ultricies nulla eget nibh congue, et consequat dui tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla facilisi. Pellentesque quam nunc, gravida facilisis mauris eget, condimentum pellentesque velit. Integer tortor eros, laoreet vitae placerat ut, varius quis metus.
            Nulla facilisi. Ut sed ultricies libero, non maximus massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse fringilla hendrerit tortor, posuere tristique massa aliquet et. Suspendisse lacinia augue nec enim congue, nec cursus nisi semper. Cras molestie, mauris nec tincidunt elementum, elit magna consequat orci, facilisis scelerisque sem felis eu ipsum. In a ex tincidunt, auctor quam ac, viverra arcu. Nullam venenatis quam sed quam consequat interdum. Nullam laoreet pulvinar fringilla. Morbi suscipit facilisis mollis. In ornare nibh quis ex ornare pulvinar in at enim. Praesent quam purus, fringilla a est at, congue porttitor lorem. Ut quis massa sem. Vivamus felis elit, porta id pulvinar in, condimentum dapibus elit. Phasellus nec orci eu mi dignissim scelerisque. Integer sed finibus velit, id suscipit elit.
            Pellentesque cursus pretium dolor, vulputate interdum nunc rutrum sollicitudin. Duis tincidunt sed metus vel hendrerit. Morbi suscipit consequat leo ut pulvinar. Nam non ipsum diam. Suspendisse feugiat feugiat justo, ut porta nisl elementum sit amet. Mauris eu lacinia metus. Sed tristique, odio congue suscipit eleifend, velit elit gravida lectus, et sodales nisi arcu non justo. Nam erat massa, vulputate id consectetur non, consectetur ut ex. Cras semper massa sed magna pretium vehicula. Integer vulputate non tellus ut fringilla. Aenean venenatis tempor tellus, ac semper magna mollis eget. In sed metus at risus scelerisque venenatis vel vel nulla. Sed laoreet laoreet vulputate.
            Donec eros nunc, mattis pretium augue eu, mollis eleifend felis. Aenean aliquam tortor vitae auctor maximus. Aliquam suscipit diam id nunc sollicitudin, ut tristique nunc dignissim. Maecenas ipsum ante, faucibus sit amet tortor ut, aliquam fermentum massa. Maecenas mattis tristique euismod. Cras ac faucibus justo. Sed eu porta diam, eu luctus dolor. Curabitur sed elit quis sapien luctus convallis id sit amet erat. Fusce ut luctus lectus, eu venenatis massa. Mauris hendrerit eu diam sed porttitor. Ut tincidunt massa a porta mollis. Nunc ante magna, suscipit nec nisi at, tristique tristique ante. Sed eu posuere dolor. Praesent molestie viverra lobortis. Maecenas et turpis pretium, sodales diam non, pulvinar purus.
            Ut quis libero rhoncus, facilisis lacus nec, pellentesque orci. Nullam eu sapien finibus, mattis nunc aliquet, scelerisque sapien. Donec nec vehicula diam. Nullam efficitur dignissim erat, vitae porttitor velit suscipit eu. Vivamus vestibulum odio eget eleifend egestas. Morbi interdum nisl vitae tincidunt finibus. Curabitur eu urna sapien.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam nec purus in elit tincidunt feugiat ut in nibh. Etiam in eros consectetur, consequat purus a, congue velit. Vivamus ultrices nulla efficitur ex hendrerit suscipit. Donec in faucibus metus, vel eleifend purus. Morbi tempor nunc non nisi ullamcorper, id ultrices velit pharetra. Duis eleifend lorem sit amet sapien ullamcorper pharetra. Fusce mollis maximus pretium. Ut arcu nisi, ornare quis scelerisque et, laoreet id diam. Curabitur vestibulum magna sed posuere consequat. Nulla facilisi. Ut ornare lacus et condimentum mattis. Vestibulum non sodales magna. Aliquam erat volutpat.
            Morbi pretium in diam eu tristique. Aenean sit amet purus ligula. Nullam aliquet, libero sed aliquet dignissim, lectus est bibendum turpis, vel tempor magna orci at ante. Donec tempor dictum lorem nec rhoncus. Cras sollicitudin convallis est a mattis. Proin ac ante nulla. Etiam porttitor ante quis elementum pellentesque. Morbi turpis diam, lacinia auctor mollis sed, imperdiet vitae magna. Nunc sed tincidunt ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean bibendum ligula diam, a fringilla metus convallis at. Ut vel arcu sodales, sollicitudin dui vel, feugiat sapien. Donec ac tristique ipsum. Sed vitae augue sit amet nisi facilisis hendrerit.
            Nullam sed vehicula ligula. Sed placerat dignissim dolor, ut lacinia nisl consequat luctus. Nam id porta augue. Aliquam pretium ex massa, non laoreet nisi porta at. Donec dignissim, justo et porttitor fermentum, libero erat volutpat nulla, sit amet laoreet massa urna at ligula. Integer sit amet lectus non ante lacinia mollis et ut odio. Suspendisse potenti. Nunc ac leo orci. Quisque vel metus non tellus pulvinar egestas. Sed eget pharetra ligula. Curabitur non metus hendrerit, elementum justo eget, luctus purus. Sed fringilla dui at commodo faucibus. Nunc dictum mattis velit, sit amet egestas ante posuere et. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec commodo, nulla ultrices pretium sodales, ligula libero fringilla justo, ut convallis diam nibh eu velit.
            Nulla rutrum, nisl id ultrices pellentesque, tortor purus vulputate ante, nec placerat lectus tortor egestas purus. Phasellus consequat iaculis tortor, elementum interdum mi egestas nec. Sed convallis sodales mi eleifend fringilla. Vivamus eros ligula, ullamcorper nec felis in, elementum lobortis dolor. Aliquam sed laoreet nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu elit massa. Donec finibus nibh gravida, ornare mi quis, ultrices nunc. Ut odio neque, convallis a massa id, mollis faucibus tortor. Praesent sapien lacus, tempus eu tortor vel, sollicitudin convallis lorem. Etiam eu auctor neque. In vehicula commodo tincidunt. Vivamus mattis, dolor sed euismod fringilla, metus diam elementum leo, nec maximus libero neque a odio. Fusce iaculis odio ut justo pellentesque, et rhoncus arcu euismod. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque posuere vehicula metus et semper.
            Nulla commodo fermentum viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque fermentum porta rhoncus. Suspendisse et cursus nulla, sed lacinia elit. Nullam facilisis diam nibh, vulputate egestas magna condimentum a. Aliquam sollicitudin velit ac justo blandit, nec aliquam nisi lobortis. Nunc in felis et justo ultrices euismod eget et ex. Nullam tristique massa in risus auctor, ac blandit arcu tincidunt. Donec libero mi, laoreet sit amet lectus id, facilisis blandit dolor. Pellentesque accumsan, nulla nec maximus ullamcorper, metus erat convallis ante, at vehicula tellus nisi id nunc. Suspendisse consectetur gravida nibh ac commodo. Donec congue libero a consequat imperdiet. Nam sed luctus magna. Pellentesque id cursus nisl, nec venenatis dui. Donec pulvinar metus lorem, vitae molestie lectus luctus vel. Sed suscipit ultricies lectus sit amet ultrices.
            Integer fringilla viverra scelerisque. Donec et tincidunt ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam et vehicula lacus, id iaculis enim. Fusce orci libero, sagittis a eleifend vel, vestibulum vitae purus. Morbi augue odio, congue sit amet turpis eget, commodo gravida dui. Aliquam consequat a orci eget vestibulum. Fusce quis sapien id dui auctor fringilla. Nulla facilisi. Nullam fringilla tempor turpis, id vulputate augue posuere quis. Aliquam egestas ipsum et varius pellentesque. Curabitur mollis dolor sem, fermentum maximus enim ultrices et. Quisque vel ipsum magna. Pellentesque feugiat tristique tempus. Maecenas et metus ut nisi ultrices varius et at mauris.
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec vulputate est quis laoreet gravida. Proin non semper metus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam ultricies, magna ac vulputate mattis, libero nunc malesuada ex, id varius ex magna at elit. Vivamus finibus enim nec lectus facilisis fermentum. Pellentesque dictum nulla urna, sed efficitur metus lobortis ac. Sed laoreet interdum tempor. Aliquam eget purus sem.
            Donec interdum quis tortor et aliquet. Nulla nec lacus sed dui aliquam consequat a et magna. Sed cursus odio sit amet nulla imperdiet, sed volutpat quam molestie. Maecenas a dignissim odio. Nunc quis aliquam dolor, finibus hendrerit leo. Etiam enim enim, condimentum commodo orci id, cursus faucibus ligula. Mauris aliquam ullamcorper metus, ut interdum erat fringilla eu. Phasellus vitae enim gravida, rutrum urna vel, cursus dolor. In non ante ac sem eleifend accumsan. Sed in nisl a augue interdum viverra id nec urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
            Etiam et fermentum leo, sed tempor nisi. Curabitur cursus sollicitudin risus sed accumsan. Mauris porttitor venenatis imperdiet. Aliquam hendrerit mollis nunc, in aliquam risus suscipit ac. Nulla tempor bibendum consequat. Sed ac lorem vestibulum lorem sollicitudin vehicula. Mauris vulputate accumsan dolor viverra commodo. Etiam volutpat sagittis tempor. Suspendisse non congue erat, sed semper orci.
            Pellentesque faucibus lectus sed bibendum tincidunt. Fusce volutpat diam eleifend pharetra cursus. Suspendisse elit lacus, porta ac tempor ut, blandit in nisi. Nam id tempor enim, vitae pulvinar metus. Praesent et auctor purus, quis fringilla nibh. Mauris tincidunt nunc elit, sit amet commodo neque pulvinar a. Nullam ac porta neque. Mauris ut diam a ex hendrerit rhoncus porta quis.`
        },
        {
            title: 'test3',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet hendrerit turpis, ac laoreet ligula iaculis vitae. Mauris ac aliquam odio. Pellentesque tincidunt in velit vel faucibus. Duis semper nibh nec ligula tempor, nec auctor ex luctus. Integer lobortis elit nisi, id volutpat erat lobortis nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum cursus arcu, sed cursus magna condimentum vel.

Nam ultrices bibendum risus, ut tincidunt justo placerat a. Fusce et purus et magna mollis tincidunt. Quisque metus leo, iaculis non metus eu, consequat lacinia magna. Ut venenatis cursus elit, non mollis erat hendrerit quis. Nullam fermentum lacus a orci ornare, vel placerat metus venenatis. Mauris ex mi, lacinia quis suscipit ac, rhoncus vel velit. Nam volutpat quis nulla a mollis. Donec nec elementum tellus. In consequat nisi vitae finibus elementum. Nam lobortis ex urna, non lacinia dui mollis nec.

Etiam ut ullamcorper leo. Maecenas eget faucibus erat, et gravida nunc. Ut at neque finibus, varius elit in, pellentesque ante. Nullam varius eget leo nec accumsan. Donec iaculis diam urna, sit amet sagittis arcu mollis eleifend. Fusce mollis metus vel metus euismod, a pellentesque neque vehicula. Nunc vestibulum ligula vitae ante eleifend finibus. Vivamus ut molestie odio, vel finibus magna. Mauris at dictum dui, eget tincidunt velit. Duis in rutrum libero. Donec ullamcorper tempor eros quis ullamcorper. Suspendisse quis urna lorem.

Nam pulvinar lorem lectus, viverra tristique est fermentum in. Praesent venenatis arcu enim, non consectetur felis auctor eget. Curabitur egestas laoreet ipsum, in rutrum lacus feugiat in. Duis pulvinar metus id neque bibendum, ut elementum enim gravida. Mauris et ex id tortor pellentesque sollicitudin eu id leo. Donec venenatis ullamcorper risus, et ultricies ante sollicitudin nec. Proin euismod maximus mattis. Morbi gravida arcu nec placerat mollis. Aliquam rhoncus varius ornare. Nullam congue elit pellentesque laoreet commodo. Nunc venenatis dui et lacus posuere, non efficitur magna laoreet. Cras laoreet metus euismod venenatis vehicula. Integer auctor, nisl sit amet dignissim finibus, tellus ligula imperdiet elit, convallis interdum ante quam aliquam quam. In non ex dui. Praesent mollis, tortor auctor placerat varius, lectus risus dapibus nisl, sit amet varius sem lectus id tellus. Donec in elementum odio.

Aliquam a viverra libero. Praesent non purus et dolor pellentesque dignissim vulputate vitae enim. In tellus orci, tincidunt ornare cursus ac, mattis sed mi. Pellentesque tempor pretium nisl id convallis. Quisque et turpis vel dui placerat malesuada. Pellentesque ut enim mollis, placerat diam non, pharetra lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam fringilla in risus ac pellentesque. Proin sagittis consequat ligula vitae vehicula. Praesent nec augue vulputate, scelerisque sapien ut, rhoncus ipsum. Curabitur id neque ornare, condimentum mauris non, dapibus tellus. Ut enim ex, sagittis et elementum ut, pellentesque id lacus. Curabitur et neque in dolor pretium facilisis sit amet a ligula. Curabitur mi mauris, faucibus quis commodo a, lobortis id arcu. Morbi sit amet dapibus nisl, sed vulputate libero. In ac mi eu erat interdum tristique id eget magna.

Pellentesque scelerisque fermentum arcu, nec maximus tortor finibus sollicitudin. Donec tempor volutpat risus, eu ullamcorper ante. Duis quis lectus urna. Integer quis elit at est aliquet vehicula ac at lacus. Morbi aliquet facilisis purus, at dictum sem bibendum sit amet. Nam tellus arcu, fringilla nec nisl vitae, aliquam porta neque. In pellentesque vestibulum nunc in aliquam. Praesent rutrum aliquam auctor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed vitae arcu non sapien faucibus dapibus sit amet sed turpis. Praesent lobortis libero sit amet ipsum finibus, vel aliquet velit aliquet. Vestibulum efficitur blandit aliquam. Vestibulum a laoreet lectus.

Vestibulum tempor nisi risus, at placerat turpis ultrices nec. Etiam eget urna eget risus viverra porta. Fusce eleifend porta libero, at ullamcorper metus tempus nec. Aliquam ac nisi eget eros facilisis finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla pulvinar vehicula magna, eget tempus justo ultrices non. In laoreet erat in lacus accumsan hendrerit. Nullam aliquam turpis non iaculis pretium. Cras a felis ex. Vestibulum bibendum, magna sed efficitur luctus, turpis nisi venenatis massa, eu cursus turpis justo et lectus. Nam vel est lectus. Sed metus massa, luctus quis mauris non, cursus ultrices mi.

Praesent tellus diam, aliquam vitae dictum et, tincidunt id arcu. Cras condimentum, tortor in condimentum convallis, nunc risus rutrum ex, eu ullamcorper augue odio non erat. Suspendisse malesuada turpis sit amet mi feugiat finibus. Maecenas imperdiet tortor sed volutpat ullamcorper. Proin sit amet fringilla lorem. Nunc scelerisque, nunc eu condimentum fermentum, nisl nulla euismod leo, eget ultrices nisi magna vitae arcu. Aliquam quis malesuada tellus. Curabitur eget lacus vitae nisl lacinia sagittis luctus placerat nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam in orci id libero placerat accumsan. Suspendisse potenti. Sed vel libero tincidunt, porttitor nibh iaculis, porta nulla. Nulla egestas lectus a mi pellentesque ultrices. Vestibulum pellentesque mauris auctor, euismod sem sit amet, commodo nulla.

Curabitur interdum tellus eu ultricies placerat. Maecenas lorem ipsum, condimentum nec interdum eget, viverra at diam. Vestibulum ac urna enim. Maecenas sit amet eleifend est. Nulla facilisi. Etiam convallis dapibus purus non vulputate. Nunc tristique tellus euismod, dapibus orci a, pellentesque elit. Sed vel euismod nibh, id placerat ligula.

Aenean vel maximus est. Maecenas pulvinar dictum consequat. Integer id nibh sapien. Morbi ac condimentum nunc, ac placerat quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec pharetra, felis vel posuere ornare, turpis turpis lobortis turpis, non convallis elit dui quis turpis. Ut tincidunt, sapien quis imperdiet aliquam, augue nulla ultricies metus, quis placerat magna lorem vel neque. Nunc nulla elit, auctor eget mauris pulvinar, commodo laoreet arcu. Phasellus in velit viverra libero condimentum ornare quis non ligula. Aenean faucibus bibendum justo, sed convallis nunc lacinia pulvinar. Morbi magna tellus, pulvinar sit amet facilisis quis, luctus vel elit. Donec rhoncus, est ut finibus faucibus, nisi tellus efficitur felis, a lobortis nibh dui quis arcu. Pellentesque at elit et urna consectetur dignissim eget non.`
        },
    ]

    const handleLogout = async () => {
        setError('')
        try {
            await logout()
            navigate('/login')
        } catch {
            setError('Failed to Log out')
        }    
    }  



    // gets the values from the inputs
    const getValues = (event) => {
        const value = event.target.value;
        setsendDataValues({...sendDataValues,[event.target.name]:value})
    }

    // gets the data from the backend
    const getData = () => {
        axios.get("http://localhost:8080/posts/get").then(res => {
            console.log('res:' ,res)
            setPosts(res.data)
        });
    };

    // sends the data to the backend
    const sendData = () => {
        axios.post('http://localhost:8080/users/mhmd/posts/post',sendDataValues)
    }

    // calls getData()
    useEffect(() =>  getData(), []);

    
    // validates and calls sendData()
    const addPostHandler = () => {
        if (sendDataValues.title === '' && sendDataValues.content === ''){alert('There isn\'t A title nor A description.')}
        else if (sendDataValues.title === ''){alert('There is no title')}
        else if (sendDataValues.content === ''){alert('There is no content')}
        else{
            console.log(sendDataValues)
            sendData();
            window.location.reload(false);
        }
    }


    return(

        <div className='mt-4'>
            {SD.map((post, index) => <ProfileCard key = {index} title = {post.title} description = {post.description}/>)}
            <div>
                <Backdrop show={newPost} clicked={() => setNewPost(false)}/>
                <div className={[MyProfileCSS.NewPost,'p-2'].join(' ')} style={{transform: newPost ? 'translateY(0)' : 'translateY(-100vh)',opacity: newPost ? '1' : '0'}}>
                    <input name='title' value={sendDataValues.title} type="text" placeholder='Title' className='p-2 my-1' onChange={getValues}/>
                    <textarea name='content' value={sendDataValues.content} cols="30" rows="10" placeholder='Text' className='p-2 mt-1' onChange={getValues}></textarea>
                    <button onClick={addPostHandler}>Submit</button>
                </div>
            </div>
            <button className={[MyProfileCSS.NewPostButton].join(' ')} onClick={() => setNewPost(true)}><Icon.VectorPen /></button>
        </div>
    )
}


export default MyProfile


