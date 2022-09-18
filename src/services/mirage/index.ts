import { createServer, Factory, Model, ActiveModelSerializer } from 'miragejs';
import { faker } from '@faker-js/faker';

type User = {
  name: string;
  email: string;
  create_at: string;
}

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer
    },
    models: {
      user: Model.extend<Partial<User>>({})
    },
    factories: {
      user: Factory.extend({
        name() {
          return faker.name.fullName()
        },
        email() {
          return faker.internet.email().toLowerCase()
        },
        createdAt() {
          return faker.date.recent(60)
        }
      })
    },

    seeds(server) {
      server.createList('user', 30)
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750;

      this.get("/users", (schema, request) => {
        const { page = 1, per_page = 10 }: any = request.queryParams
        
        const pageStart = (Number(page) - 1)  * Number(per_page)
        const pageEnd = pageStart + Number(per_page) 

        const users = schema.all("user").slice(pageStart, pageEnd)

        return users
      });
      this.post("/users");
      this.get("/users/:id");

      this.namespace = '';
      this.passthrough();
    }
  })

  return server;
}