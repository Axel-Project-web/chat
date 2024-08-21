//styles
import styles from './styles.module.css';

//interface
interface TargetType {
    path: string;
    source: {
        active: string;
        desactive: string;
    }
}

interface PropertiesType {
    currentPath: string;
    nodes: Array<TargetType>
}

//local components
function Point({ source, active }:{ source:string, active: boolean }) {
    return (
        <div data-active = { active } className = { styles.point }>
            <img src = { source } alt = "icon" />
        </div>
    )
}

function ProgressBar( { nodes, currentPath }: PropertiesType ) {
    return (
        <div className = { styles.wrapper }>
            {
                nodes.map( target => {
                    return <Point 
                        key = { target.path } 
                        source = { 
                            target.path === currentPath ? target.source.active : target.source.desactive 
                        } 
                        active = { target.path === currentPath }
                    />
                })
            }
        </div>
    )
}

export { ProgressBar };