import { Application, Context } from 'probot';
import { Service } from 'typedi';

@Service()
export class GithubService {
    private app: Application;

    static getInstance() {
        return (app: Application) => {
            return new GithubService(app);
        };
    }

    public static ifUserNotBot(userType: string) {
        return userType !== 'Bot';
    }

    private constructor(app: Application) {
        this.app = app;

        app.on('*', GithubService.eventsMonitor);
        app.on('issue_comment.created', GithubService.issueCommentCreated);
    }

    public static async eventsMonitor(context: Context) {
        console.debug('Webhook received', { event: context.event, action: context.payload.action });
    }

    public static async issueCommentCreated(context: Context) {
        if (GithubService.ifUserNotBot(context.payload.comment.user.type)) {
            const { body } = context.payload.comment;
            // console.log('THIS HAPPENED', body);

            const issueComment = context.issue({ body: `You said: ${body}` });
            await context.github.issues.createComment(issueComment);
        }
    }
}
