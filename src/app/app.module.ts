import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {
  APOLLO_OPTIONS,
  ApolloLink,
  ApolloModule,
  HttpLink,
  HttpLinkModule,
  InMemoryCache,
} from 'apollo-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { setContext } from '@apollo/link-context';
import { environment } from '../environments/environment';
import result from './introspection-generated';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './header/header.component';
import { ResultComponent } from './result/result.component';
import { RepositoryItemComponent } from './result/repository-item/repository-item.component';
import { MatCardModule } from '@angular/material/card';
import { initialState, stateResolvers } from './state/resolvers';
import { typeDefs } from './schema';
import { SearchViewComponent } from './search-view/search-view.component';
import { RepositoryViewComponent } from './search-view/repository-view/repository-view.component';
import { GetStateDocument } from './types-generated';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResultComponent,
    RepositoryViewComponent,
    RepositoryItemComponent,
    SearchViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        const token = environment.token;
        const auth = setContext((operation, context) => ({
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }));
        const link = ApolloLink.from([
          auth,
          httpLink.create({ uri: 'https://api.github.com/graphql' }),
        ]);
        const cache = new InMemoryCache({
          possibleTypes: result.possibleTypes,
        });
        cache.writeQuery({
          query: GetStateDocument,
          data: { state: initialState },
        });
        return {
          cache,
          link,
          typeDefs,
          resolvers: stateResolvers,
          connectToDevTools: false,
        };
      },
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
