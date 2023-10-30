import { Grid, List } from "semantic-ui-react";

export default function ActivityDashboard() {
    return (
    <Grid>
    <Grid.Column width='10'>
    <List>
    {activities.map(activity => (
    <List.Item key={activity.id}>
    {activity.title}
    </List.Item>
    ))}
    </List>
    </Grid.Column>
    </Grid>
    )
    }