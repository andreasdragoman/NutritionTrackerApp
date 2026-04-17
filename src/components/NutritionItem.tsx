import '../styles/nutritionItem.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function NutritionItem(props:any)
{
    const deleteButtonHandler = (evt:any)=>
    {
        props.deleteEvent(props.nutrition.id)
    }

    return(
        <div className="nutrition-item-card">
            <h5 className="nutrition-item-title">{props.nutrition.foodName}</h5>
            <p>Calories: {props.nutrition.calories}</p>
            <p>Proteins: {props.nutrition.protein}</p>
            <Button variant="outlined" startIcon={<DeleteIcon />} onClick={deleteButtonHandler}>Delete</Button>
        </div>
    )
}