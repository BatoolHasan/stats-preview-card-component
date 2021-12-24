import './App.css';
import Footer from './components/footer';
import Card from './components/card';
function App() {
  return (
    <main>
      <div className="container">
        <Card 
          title={"Get -insights- that help your business grow."}
          body={"Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency."}
          stats={[
            {
              heading:"10k+",
              subheading:"companies"
            },
            {
              heading:"314",
              subheading:"templates"
            },
            {
              heading:"12m+",
              subheading:"queries"
            }
          ]
        }
          />
        <Footer/> 
      </div>
    </main>
  );
}

export default App;
