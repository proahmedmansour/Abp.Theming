using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace Abp.Theming.Data;

/* This is used if database provider does't define
 * IThemingDbSchemaMigrator implementation.
 */
public class NullThemingDbSchemaMigrator : IThemingDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
