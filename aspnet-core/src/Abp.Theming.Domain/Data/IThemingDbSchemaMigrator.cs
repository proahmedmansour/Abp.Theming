using System.Threading.Tasks;

namespace Abp.Theming.Data;

public interface IThemingDbSchemaMigrator
{
    Task MigrateAsync();
}
